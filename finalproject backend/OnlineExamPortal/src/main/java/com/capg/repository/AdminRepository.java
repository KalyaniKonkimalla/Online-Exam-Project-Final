package com.capg.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capg.model.AdminLogin;

public interface AdminRepository extends JpaRepository<AdminLogin,Integer> {

}
