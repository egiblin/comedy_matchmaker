FactoryGirl.define do
  factory :user do
    email "dave@carb.com"
    password "bigdave"
    first_name "Dave"
    last_name "Murray"
    admin false
    # show
    # team
  end
  

  factory :admin, class: User do
    email "admin@admin.com"
    password "gotkeys"
    first_name "Admin"
    last_name "Guy"
    admin true
  end
end
