class Monster < ActiveRecord::Base
  has_many :encounters
  has_many :players, through: :encounters
end