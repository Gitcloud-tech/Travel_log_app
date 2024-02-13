package com.safar.LogApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.safar.LogApp.model.Blog;

public interface BlogRepository extends JpaRepository<Blog, Integer>{

	List<Blog> findByBlogger_BloggerId(int bloggerId);
	
}

