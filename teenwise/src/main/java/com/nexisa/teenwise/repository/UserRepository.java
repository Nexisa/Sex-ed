package com.nexisa.teenwise.repository;
import com.nexisa.teenwise.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByRollNo(String rollNo);
}
