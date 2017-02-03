class Team < ApplicationRecord
  validates :name, presence: true
  mount_uploader :team_photo, TeamPhotoUploader

  has_many :teamshows
  has_many :shows, through: :teamshows
  has_many :userteams
  has_many :users, through: :userteams
end
