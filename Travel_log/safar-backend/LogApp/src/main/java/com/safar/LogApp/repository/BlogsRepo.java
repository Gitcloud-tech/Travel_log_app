package com.safar.LogApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.safar.LogApp.model.UserBlog;

public interface BlogsRepo extends JpaRepository<UserBlog,  Long> {


}
