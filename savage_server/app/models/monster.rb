class Monster < ActiveRecord::Base
  has_many :players, through: :encounters
end