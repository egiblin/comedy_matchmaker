class Team < ApplicationRecord
  validates :name

  has_many :shows, through: :teamshows
  has_many :users, through: :userteams
end
