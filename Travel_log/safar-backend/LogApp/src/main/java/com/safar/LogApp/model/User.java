package com.safar.LogApp.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "user_sequence")
    @SequenceGenerator(name="user_sequence", sequenceName="user_sequence", initialValue=101)
	private Long userId;
	private String fullName;
	private String username;
	private String email;
	private String mobile;
	private String socialInsta;
	private String socialYoutube;
	private String password;
	
	
	 @OneToMany(cascade = CascadeType.ALL)
	    @JoinColumn(name = "user_id", referencedColumnName = "userId")
	    List < UserBlog > userBlogs = new ArrayList < > ();
	
	
	
	
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getSocialInsta() {
		return socialInsta;
	}
	public void setSocialInsta(String socialInsta) {
		this.socialInsta = socialInsta;
	}
	public String getSocialYoutube() {
		return socialYoutube;
	}
	public void setSocialYoutube(String socialYoutube) {
		this.socialYoutube = socialYoutube;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	
	
	public List<UserBlog> getUserBlogs() {
		return userBlogs;
	}
	public void setUserBlogs(List<UserBlog> userBlogs) {
		this.userBlogs = userBlogs;
	}
	
	
}