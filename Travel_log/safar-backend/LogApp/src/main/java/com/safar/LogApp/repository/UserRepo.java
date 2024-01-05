package com.safar.LogApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.safar.LogApp.model.User;

public interface UserRepo extends JpaRepository<User, Long> {

}
