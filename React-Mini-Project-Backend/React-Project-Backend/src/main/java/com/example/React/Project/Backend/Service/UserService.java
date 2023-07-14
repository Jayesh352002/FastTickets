package com.example.React.Project.Backend.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.React.Project.Backend.DTO.UserLoginDTO;
import com.example.React.Project.Backend.DTO.UserRegisterDTO;
import com.example.React.Project.Backend.Entity.UserEntity;
import com.example.React.Project.Backend.Repo.UserRepo;

@Service
public class UserService {

	private UserRepo userRepo ;

	@Autowired
	public UserService(UserRepo userRepo) {
		this.userRepo = userRepo;
	} 
	
	public String addUsers(UserRegisterDTO userRegisterDTO) {
		UserEntity userEntity = new UserEntity(
				userRegisterDTO.getUserName(),
				userRegisterDTO.getUserEmail(),
				userRegisterDTO.getUserPassword());
		
		userRepo.save(userEntity);
		
		return userEntity.getUserName();
	}
	
	/*
	public String loginUsers(UserLoginDTO userLoginDTO) {
		
		UserEntity user = userRepo.findByEmail(userLoginDTO.getUserEmail());
		
		if(user!=null) {
			String password = userLoginDTO.getUserPassword();
			String loginPassword = user.getUserPassword();
			
			if(password.equals(loginPassword)) {
				Optional<UserEntity> user1 = userRepo.findOneByEmailAndPassword(userLoginDTO.getUserEmail(), loginPassword);
				
				if(user1.isPresent()) {
					return "Login Success";
				}
				else {
					return "Login Failed";
				}
			
			}
			else {
				return "Invalid Password";
			}
		}
		else
		{
			return "Email does not exists";
		}

	}*/

}
