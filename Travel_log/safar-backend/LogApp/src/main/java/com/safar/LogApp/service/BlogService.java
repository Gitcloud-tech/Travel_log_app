package com.safar.LogApp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.safar.LogApp.exception.BloggerServiceException;
import com.safar.LogApp.model.Blog;
import com.safar.LogApp.repository.BlogRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class BlogService {
	@Autowired
	private BlogRepository blogRepository;
	
	public int addImages(Blog blog) {
	        Blog savedBlog = blogRepository.save(blog);
	        return savedBlog.getId();
	}
	
	public void deleteImage(Blog blog) {
		blogRepository.delete(blog);
	}
	
	public int addBlog(Blog blog) {
        Blog savedBlog = blogRepository.save(blog);
        return savedBlog.getId();
	}
	
	public void deleteBlog(Blog blog) {
		blogRepository.delete(blog);
	}
	
	public Blog fetchById(int id) {
		Optional<Blog> blog = blogRepository.findById(id);
		if(blog.isPresent())
			return blog.get();
		else
			throw new BloggerServiceException("Blog with id " + id + " does not exist!");
	}
	
	public List<Blog> fetchBlogPhotosByBloggerId(int bloggerId) {
        return blogRepository.findByBlogger_BloggerId(bloggerId);
    }

	public List<Blog> fetchAllBlogs() {
			return blogRepository.findAll();
		}
}
