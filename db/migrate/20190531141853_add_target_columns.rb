class AddTargetColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :targets, :workout_day_id, :int, default: nil
    add_column :targets, :exercise_id, :int, default: nil
    add_column :targets, :sets, :int, default: nil
    add_column :targets, :reps, :int, default: nil
    add_column :targets, :weight, :double, default: nil
  end
end
