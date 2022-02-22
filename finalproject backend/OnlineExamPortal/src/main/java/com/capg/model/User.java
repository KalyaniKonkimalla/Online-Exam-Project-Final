package com.capg.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_table")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "userid", length = 200, unique = true)
	private long userid;
	
	@Column(unique=true)
	private String useremail;
	
	@Column(name = "username", length = 200, unique = true)
	private String username;
	
    @Column(unique = true)
	private long usermobileno;
	
	
	@Column(name = "password", length = 200)
	private String password;
	
	//@OneToOne(cascade = CascadeType.ALL, mappedBy = "user")
	//private Enrollment enrollment;

	public long getUserid() {
		return userid;
	}

	public void setUserid(long userid) {
		this.userid = userid;
	}

	public String getUseremail() {
		return useremail;
	}

	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public long getUsermobileno() {
		return usermobileno;
	}

	public void setUsermobileno(long usermobileno) {
		this.usermobileno = usermobileno;
	}


	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public String toString() {
		return "User [userid=" + userid + ", useremail=" + useremail + ", username=" + username + ", usermobileno="
				+ usermobileno + ", password=" + password + "]";
	}

}
