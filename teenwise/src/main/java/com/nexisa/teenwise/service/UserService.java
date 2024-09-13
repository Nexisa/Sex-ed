package com.nexisa.teenwise.service;

import com.nexisa.teenwise.models.User;

public interface UserService {
    User saveUser(User user);
    User findByRollNo(String rollNo);
    // Other methods as needed
}
