class Team < ApplicationRecord
  validates :name, presence: true

  has_many :shows, through: :teamshows
  has_many :users, through: :userteams
end
