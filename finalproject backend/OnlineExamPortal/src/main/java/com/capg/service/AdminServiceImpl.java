package com.capg.service;

import java.util.Optional;

import com.capg.model.AdminLogin;

public interface AdminServiceImpl {
	public AdminLogin addAdmin(AdminLogin admin);

	public Optional<AdminLogin> findByAdminId(int admin_id);
}
