class Target < ApplicationRecord
  belongs_to :workout_day
  belongs_to :exercise
  has_many :result
end
