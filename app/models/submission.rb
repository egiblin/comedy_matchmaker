class Submission < ApplicationRecord
  validates :improv, default: false
  validates :selected, default: false

  belongs_to :show
  belongs_to :user
  belongs_to :team, optional: true
end
