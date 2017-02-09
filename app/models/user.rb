class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  mount_uploader :avatar, AvatarUploader
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :email, presence: true,
  format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i },
  uniqueness: { case_sensitive: false }
  validates :password, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :admin, default: false

  has_many :usershows
  has_many :shows, through: :usershows
  has_many :userteams
  has_many :teams, through: :userteams
  has_many :submissions
end
