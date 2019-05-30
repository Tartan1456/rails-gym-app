class AddExerciseColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :exercises, :exerciseName, :string, default: nil
    add_column :exercises, :sets, :int, default: nil
    add_column :exercises, :reps, :int, default: nil
    add_column :exercises, :weight, :int, default: nil
  end
end
