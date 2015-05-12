class Player < ActiveRecord::Base
  has_secure_password
  
  has_many :encounters
  has_many :monsters, through: :encounters
end