package com.capg.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.model.AdminLogin;
import com.capg.repository.AdminRepository;

@Service
public class AdminService implements AdminServiceImpl {
	
	@Autowired
	AdminRepository dao;

	@Override
	public AdminLogin addAdmin(AdminLogin admin) {
		AdminLogin login=dao.save(admin);
		return login;
	}

	@Override
	public Optional<AdminLogin> findByAdminId(int admin_id) {
		return dao.findById(admin_id);
	}

}
