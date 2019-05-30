class AddWorkoutColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :workout_days, :date, :datetime, default: nil
    add_column :workout_days, :muscleset, :string, default: nil
  end
end
