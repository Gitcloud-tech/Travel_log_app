package com.safar.LogApp.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.safar.LogApp.dto.BlogDetail;
import com.safar.LogApp.dto.RegistrationStatus;
import com.safar.LogApp.exception.BloggerServiceException;
import com.safar.LogApp.model.Blog;
import com.safar.LogApp.service.BlogService;

@RestController
@CrossOrigin
public class BlogController {
	
	@Autowired
	private BlogService blogService;
	
	@PostMapping("/add-blog")
	public ResponseEntity<RegistrationStatus> registerv3(BlogDetail blogDetail) {
	    try {
	        Blog blog = new Blog();
	        BeanUtils.copyProperties(blogDetail, blog);

	        MultipartFile pic = blogDetail.getPhotoUrl();
	        
	        // Check is Pic is not null before accessing properties
	        if (pic != null) {
	            try {
	                String fileName = pic.getOriginalFilename();

	                String generatedFileName = fileName; 

	                blog.setPhotoUrl(generatedFileName);

	                InputStream is = pic.getInputStream();
	                FileOutputStream os = new FileOutputStream("C:" + File.separator + "Final Project" + File.separator + "Travel_log" + File.separator + "safar-ui" + File.separator + "ALLImages" + File.separator + generatedFileName);
	                FileCopyUtils.copy(is, os);
	            } catch (IOException e) {
	                e.printStackTrace();
	            }
	        } else {
	            RegistrationStatus status = new RegistrationStatus();
	            status.setStatus(false);
	            status.setStatusMessage("picture is required.");
	            return new ResponseEntity<>(status, HttpStatus.BAD_REQUEST);
	        }

	        int id = blogService.addImages(blog);
	        RegistrationStatus status = new RegistrationStatus();
	        status.setStatus(true);
	        status.setStatusMessage("Photo Uploaded Successful!");
	        status.setId(id);

	        return new ResponseEntity<>(status, HttpStatus.OK);

	    } catch (BloggerServiceException e) {
	        RegistrationStatus status = new RegistrationStatus();
	        status.setStatus(false);
	        status.setStatusMessage(e.getMessage());

	        return new ResponseEntity<>(status, HttpStatus.BAD_REQUEST);
	    }
	}
	
	 @GetMapping("/blogger/blog/{id}")
   public Blog fetchById(@PathVariable int id) {
       Blog blog = blogService.fetchById(id);
       if (blog == null) {
           throw new BloggerServiceException("Blog with id " + id + " does not exist!");
       }
       return blog;
   }

   @GetMapping(path = "/blogger/fetch/pic/{id}", produces = MediaType.IMAGE_JPEG_VALUE)
   public ResponseEntity<byte[]> getProfilePic(@PathVariable int id) {
       try {
           Blog blog = blogService.fetchById(id);
           if (blog == null) {
               throw new BloggerServiceException("Blog with id " + id + " does not exist!");
           }
           
           Path imagePath = FileSystems.getDefault().getPath("C:" + File.separator + "Final Project" + File.separator + "Travel_log" + File.separator + "safar-ui" + File.separator + "ALLImages" + File.separator + blog.getPhotoUrl());
           byte[] imageBytes = Files.readAllBytes(imagePath);

           HttpHeaders headers = new HttpHeaders();
           headers.setContentType(MediaType.IMAGE_JPEG);

           return new ResponseEntity<>(imageBytes, headers, HttpStatus.OK);
       } catch (IOException e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @GetMapping("/blog/fetchBlogtPhotosByBlogger/{bloggerId}")
   public RegistrationStatus fetchBlogPhotosByBloggerId(@PathVariable int bloggerId) {
       try {
           List<Blog> blogList = blogService.fetchBlogPhotosByBloggerId(bloggerId);

           RegistrationStatus status = new RegistrationStatus();
           status.setList(blogList);
           status.setStatus(true);
           status.setStatusMessage("Blog photos fetched successfully.");
           return status;
       } catch (Exception e) {
           RegistrationStatus status = new RegistrationStatus();
           status.setStatus(false);
           status.setStatusMessage("Failed to fetch blog photos: " + e.getMessage());
           return status;
       }
   }

   @GetMapping("/blog/fetchAllBlogs")
   public RegistrationStatus fetchAllBlogs() {
       try {
           List<Blog> blogList = blogService.fetchAllBlogs();

           RegistrationStatus status = new RegistrationStatus();
           status.setList(blogList);
           status.setStatus(true);
           status.setStatusMessage("All blogs fetched successfully.");
           return status;
       } catch (Exception e) {
           RegistrationStatus status = new RegistrationStatus();
           status.setStatus(false);
           status.setStatusMessage("Failed to fetch all blogs: " + e.getMessage());
           return status;
       }
   }

   @DeleteMapping("/blog/delete/{id}")
   public ResponseEntity<RegistrationStatus> deleteBlog(@PathVariable int id) {
       try {
           Blog blog = blogService.fetchById(id);
           if (blog == null) {
               throw new BloggerServiceException("Blog with id " + id + " does not exist!");
           }

           Path imagePath = FileSystems.getDefault().getPath("C:" + File.separator + "Final Project" + File.separator + "Travel_log" + File.separator + "safar-ui" + File.separator + "ALLImages" + File.separator + blog.getPhotoUrl());
           Files.deleteIfExists(imagePath);

           blogService.deleteImage(blog);

           RegistrationStatus status = new RegistrationStatus();
           status.setStatus(true);
           status.setStatusMessage("Blog deleted successfully.");
           return ResponseEntity.ok(status);
       } catch (Exception e) {
           RegistrationStatus status = new RegistrationStatus();
           status.setStatus(false);
           status.setStatusMessage("Failed to delete blog: " + e.getMessage());
           return ResponseEntity.badRequest().body(status);
       }
   }


}
