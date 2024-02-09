package com.safar.LogApp.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.safar.LogApp.model.Log;
import com.safar.LogApp.model.UserBlog;
import com.safar.LogApp.repository.LogsRepo;


@RestController
@CrossOrigin("http://localhost:3003")
@RequestMapping("/blogs")
public class LogsController {
	private LogsRepo logsRepo;

	public LogsController(LogsRepo logsRepo) {
		this.logsRepo = logsRepo;
	}
	
	@PostMapping("/addLog")
	Log newLog(@RequestBody Log newLog) {
		
		return logsRepo.save(newLog);
	}
	
	 @GetMapping("/getLogs")
	    List<Log> getAllLogs() {
	        return logsRepo.findAll();
	    }
}
