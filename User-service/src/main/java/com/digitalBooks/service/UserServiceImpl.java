package com.digitalBooks.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.digitalBooks.components.User;
import com.digitalBooks.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@org.springframework.beans.factory.annotation.Autowired
	private UserRepository userRepository;

	@Override
	public User createUser(User user) {
		User createdUser = userRepository.save(user);
		return createdUser;
	}

	@Override
	public User getUser(int userId) {
		Optional<User> optional = userRepository.findById(userId);
		User user = optional.get();
		return user;
	}

	@Override
	public Optional<User> getUserByUserNameAndPassword(String userName, String password) {

		List<User> users = userRepository.findAll();
		for (User user : users) {
			if (user.getUserName().equals(userName) && user.getPassword().equals(password)) {
				return Optional.ofNullable(user);

			}
		}
		return null;

	}
}
