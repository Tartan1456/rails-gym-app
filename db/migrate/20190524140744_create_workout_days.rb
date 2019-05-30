class CreateWorkoutDays < ActiveRecord::Migration[5.2]
  def change
    create_table :workout_days do |t|

      t.timestamps
    end
  end
end
