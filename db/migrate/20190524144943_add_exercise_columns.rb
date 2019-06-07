class AddExerciseColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :exercises, :name, :string, default: nil
  end
end
