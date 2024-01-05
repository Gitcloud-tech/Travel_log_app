package com.safar.LogApp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.safar.LogApp.model.Log;
import com.safar.LogApp.repository.LogsRepo;


@RestController
@CrossOrigin("http://localhost:3003")
public class LogsController {
	private LogsRepo logsRepo;

	public LogsController(LogsRepo logsRepo) {
		this.logsRepo = logsRepo;
	}
	
	@PostMapping("/addLog")
	Log newLog(@RequestBody Log newLog) {
		
		return logsRepo.save(newLog);
	}
	
	
}
