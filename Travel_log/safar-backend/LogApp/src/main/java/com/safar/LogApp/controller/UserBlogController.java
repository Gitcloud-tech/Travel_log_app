package com.safar.LogApp.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.safar.LogApp.model.UserBlog;
import com.safar.LogApp.repository.BlogsRepo;



@RestController
@RequestMapping("/blogs")
public class UserBlogController {
	private BlogsRepo blogRepo;
	
	public UserBlogController(BlogsRepo blogRepo) {
        this.blogRepo = blogRepo;
    }
	
	@PostMapping("/addBlog")
	UserBlog userBlog(@RequestBody UserBlog userBlog) {
		
		return blogRepo.save(userBlog);
	}
	
	
}
