package com.nexisa.teenwise.service;

import com.nexisa.teenwise.models.User;
import com.nexisa.teenwise.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User findByRollNo(String rollNo) {
        return userRepository.findByRollNo(rollNo);
    }

}

