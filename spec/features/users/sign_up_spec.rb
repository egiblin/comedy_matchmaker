require 'rails_helper'

feature 'sign up' do
user = FactoryGirl.build(:user)
  scenario 'with valid information' do
    visit root_path
    click_link 'Sign up'
    fill_in 'Email', with: user.email
    fill_in 'First Name', with: user.first_name
    fill_in 'Last Name', with: user.last_name
    fill_in 'user_password', with: user.password
    fill_in 'Password confirmation', with: user.password
    click_button 'Sign up'
    expect(page).to have_content('Welcome! You have signed up successfully.')
    expect(page).to have_content('Logout')
  end

  scenario 'with missing information' do
    visit root_path
    click_link 'Sign up'
    click_button 'Sign up'
    expect(page).to have_content("can't be blank")
  end

  scenario 'with a conflicting password confirmation' do
    visit root_path
    click_link 'Sign up'
    fill_in 'user_password', with: user.password
    fill_in 'Password confirmation', with: 'something different'
    click_button 'Sign up'
    expect(page).to have_content("doesn't match")
  end
end
