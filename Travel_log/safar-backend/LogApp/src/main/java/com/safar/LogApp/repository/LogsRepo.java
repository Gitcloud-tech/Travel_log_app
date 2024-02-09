package com.safar.LogApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.safar.LogApp.model.Log;



public interface LogsRepo extends JpaRepository<Log, Integer>{

}
