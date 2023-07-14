package com.example.React.Project.Backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.React.Project.Backend.DTO.UserLoginDTO;
import com.example.React.Project.Backend.DTO.UserRegisterDTO;
import com.example.React.Project.Backend.Service.UserService;

@RequestMapping("api/v1/users")
@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService userService ; 

	@PostMapping(path = "/registerusers")
	public String registerUsers(@RequestBody UserRegisterDTO userRegisterDTO) {
		String id = userService.addUsers(userRegisterDTO);
		return id ; 
	}
	
	/*
	@PostMapping(path = "/loginusers")
	public String loginUsers(@RequestBody UserLoginDTO userLoginDTO) {
		String msg = userService.loginUsers(userLoginDTO);
		return msg ; 
	}*/
	
}
