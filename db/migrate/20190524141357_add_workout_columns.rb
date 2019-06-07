class AddWorkoutColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :workout_days, :name, :string, default: nil
  end
end
