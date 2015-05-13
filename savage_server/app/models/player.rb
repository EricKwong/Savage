class Player < ActiveRecord::Base
  has_secure_password
  
  has_many :encounters
  has_many :monsters, through: :encounters

  validates_presence_of :username, :password_digest, :first_name, :last_name
  validates_uniqueness_of :username
end