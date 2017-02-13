class Team < ApplicationRecord
  validates :name, presence: true
  validates :team_photo, presence: true

  has_many :teamshows
  has_many :shows, through: :teamshows
  has_many :userteams
  has_many :users, through: :userteams
  has_many :submissions
end
