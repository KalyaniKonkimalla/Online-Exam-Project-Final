package com.capg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Admin")
public class AdminLogin {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="admin_id", length=200,unique=true)
	private int admin_id;
	
	@Column(name="admin_name", length=200,unique=true)
	private String admin_name;
	
	@Column(name="admin_address", length=200,unique=true)
	private String admin_address;
	
	@Column(name="aemail", length=200,unique=true)
	private String aemail;
	
	public int getAdmin_id() {
		return admin_id;
	}
	public void setAdmin_id(int admin_id) {
		this.admin_id = admin_id;
	}
	public String getAdmin_name() {
		return admin_name;
	}
	public void setAdmin_name(String admin_name) {
		this.admin_name = admin_name;
	}
	public String getAdmin_address() {
		return admin_address;
	}
	public void setAdmin_address(String admin_address) {
		this.admin_address = admin_address;
	}
	public String getAemail() {
		return aemail;
	}
	public void setAemail(String aemail) {
		this.aemail = aemail;
	}
	@Override
	public String toString() {
		return "AdminLogin [admin_id=" + admin_id + ", admin_name=" + admin_name + ", admin_address=" + admin_address
				+ ", aemail=" + aemail + "]";
	}

}
