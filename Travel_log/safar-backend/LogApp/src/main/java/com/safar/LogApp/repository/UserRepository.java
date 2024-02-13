package com.safar.LogApp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.safar.LogApp.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	public Optional<User> findByUserEmail(String userEmail);
}

