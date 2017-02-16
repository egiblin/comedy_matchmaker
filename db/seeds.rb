User.create!([
  {email: "aziz@aziz.com", password: "123456", first_name: "Aziz", last_name: "Ansari", admin: false, reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2017-02-13 17:43:48", last_sign_in_at: "2017-02-13 17:43:48", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1", avatar: "Aziz_Ansari_2012_Shankbone.JPG"},
  {email: "kate@kate.com", password: "123456", first_name: "Kate", last_name: "McKinnon", admin: false, reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2017-02-13 17:44:20", last_sign_in_at: "2017-02-13 17:44:20", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1", avatar: "Kate-McKinnon.jpg"},
  {email: "bobby@bobby.com", password: "123456", first_name: "Bobby", last_name: "Moynihan", admin: false, reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2017-02-13 17:44:50", last_sign_in_at: "2017-02-13 17:44:50", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1", avatar: "Moynihan.jpg"},
  {email: "abbi@abbi.com", password: "123456", first_name: "Abbi", last_name: "Jacobson", admin: false, reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2017-02-13 17:46:19", last_sign_in_at: "2017-02-13 17:46:19", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1", avatar: "abbi.jpg"},
  {email: "jordan@jordan.com", password: "123456", first_name: "Jordan", last_name: "Peele", admin: false, reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2017-02-13 17:47:15", last_sign_in_at: "2017-02-13 17:47:15", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1", avatar: "Jordan-Peele.jpg"},
  {email: "nathan@nathan.com", password: "123456", first_name: "Nathan", last_name: "Fielder", admin: false, reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2017-02-13 17:48:28", last_sign_in_at: "2017-02-13 17:48:28", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1", avatar: "nathan_fielder.jpg"},
  {email: "ilana@ilana.com", password: "123456", first_name: "Ilana", last_name: "Glazer", admin: false, reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 2, current_sign_in_at: "2017-02-13 18:32:25", last_sign_in_at: "2017-02-13 17:45:43", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1", avatar: "ilana.jpg"},
  {email: "leslie@leslie.com", password: "123456", first_name: "Leslie", last_name: "Jones", admin: false, reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 2, current_sign_in_at: "2017-02-13 19:08:17", last_sign_in_at: "2017-02-13 17:15:57", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1", avatar: "leslie_jones_1050x1050.jpg"},
  {email: "adam@adam.com", password: "123456", first_name: "Adam", last_name: "Pally", admin: false, reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 6, current_sign_in_at: "2017-02-13 20:22:44", last_sign_in_at: "2017-02-13 20:06:53", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1", avatar: "adam-pally.jpg"},
  {email: "aidy@aidy.com", password: "123456", first_name: "Aidy", last_name: "Bryant", admin: false, reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 7, current_sign_in_at: "2017-02-13 20:30:49", last_sign_in_at: "2017-02-13 20:13:25", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1", avatar: "aidy-bryant-the-face-1.jpg"}
])
Show.create!([
  {name: "Nathan For You", location: "Los Angeles, CA", date: "2017-02-15", time: "21:00", duration: 0.0, slots: 2, creator: "Nathan Fielder", price: "Free", show_photo: "http://thelaughbutton.com/site2/wp-content/uploads/2015/12/Nathan-For-You.jpg"},
  {name: "Schwartz and Pally", location: "Los Angeles, CA", date: "2017-02-23", time: "22:00", duration: 2.0, slots: 4, creator: "Adam Pally", price: "$5", show_photo: "http://www.serialoptimist.com/admin/wp-content/uploads/2013/06/hotsauce.jpg"},
  {name: "Kaleidoscope", location: "Creek and the Cave", date: "2017-02-13", time: "19:00", duration: 2.0, slots: 5, creator: "Aidy Bryant", price: "Free", show_photo: "http://creeklic.com/wp-content/uploads/2014/02/KScopeLogo_1-700x700.jpg"},
  {name: "Broad City Live", location: "UCB Chelsea", date: "2017-10-16", time: "21:00", duration: 0.0, slots: 0, creator: "Ilana Glazer", price: "$7", show_photo: "http://pixel.nymag.com/imgs/daily/vulture/2015/03/05/magazine/06-broad-city.w1200.h630.jpg"},
  {name: "Pally and Pals", location: "UCBEast", date: "2017-02-23", time: "20:00", duration: 2.0, slots: 3, creator: "Adam Pally", price: "$10", show_photo: "http://www.glamour.com/images/entertainment/2013/09/adam-pally-1-main.jpg"},
  {name: "Standup Saturday", location: "Caroline's", date: "2017-02-18", time: "22:00", duration: 2.0, slots: 1, creator: "Aidy Bryant", price: "$25", show_photo: "http://www.nycgo.com/images/venues/2087/carolines_exterior__x_large.jpg"}
])
Submission.create!([
  {pitch: "Been dying to do this show!", improv: false, selected: false, user_id: 10, show_id: 6, team_id: nil},
  {pitch: "Would love to do a fun character!", improv: false, selected: true, user_id: 5, show_id: 1, team_id: nil},
  {pitch: "Please! I have the best bit I want to do at this show!", improv: false, selected: true, user_id: 10, show_id: 1, team_id: nil}
])
Team.create!([
  {name: "Death By Roo Roo", team_photo: "https://static1.squarespace.com/static/554a9705e4b01b8e18be1533/55b4877ee4b043b82685ee3f/55b71d17e4b00871cfc0aa6b/1438063896238/DSC_1093_deathbyrooroo2009_AriScott_sm_forwebsite.jpg?format=1000w", location: "New York, NY"},
  {name: "The Stepfathers", team_photo: "https://springclops.files.wordpress.com/2012/06/sentimental-lady.jpg", location: "New York, NY"},
  {name: "American Cousin", team_photo: "http://24.media.tumblr.com/tumblr_lp00iokbtp1qz7gx8o1_500.jpg", location: "New York, NY"},
  {name: "Sandino", team_photo: "http://sandino.improvteams.com/img/teams/heroes/9EJ.jpg", location: "New York, NY"},
  {name: "Hot Sauce", team_photo: "https://static1.squarespace.com/static/51748cf3e4b05f51bd764888/t/55f4d692e4b0df783b20f68a/1442109100195/hot+sauces.jpg", location: "Los Angeles, CA"}
])
Usershow.create!([
  {user_id: 1, show_id: 1},
  {user_id: 9, show_id: 2},
  {user_id: 10, show_id: 3},
  {user_id: 1, show_id: 4},
  {user_id: 1, show_id: 5},
  {user_id: 6, show_id: 6},
  {user_id: 10, show_id: 7},
  {user_id: 10, show_id: 1}
])
Userteam.create!([
  {user_id: 1, team_id: 1},
  {user_id: 1, team_id: 2},
  {user_id: 1, team_id: 3},
  {user_id: 1, team_id: 4},
  {user_id: 1, team_id: 5},
  {user_id: 9, team_id: 6},
  {user_id: 9, team_id: 7},
  {user_id: 10, team_id: 8},
  {user_id: 3, team_id: 8},
  {user_id: 10, team_id: 2}
])
