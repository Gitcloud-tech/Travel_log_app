package com.safar.LogApp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.safar.LogApp.model.Blogger;

public interface BloggerRepository extends JpaRepository<Blogger, Integer>{
	public Optional<Blogger> findByBloggerEmail(String bloggerEmail);
}
