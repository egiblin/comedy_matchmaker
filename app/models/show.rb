class Show < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true
  validates :date, presence: true
  validates :time, presence: true
  validates :duration, presence: true
  validates :slots, presence: true
  validates :creator, presence: true
  validates :price, presence: true

  has_many :users, through: :usershows
  has_many :teams, through: :userteams
end
