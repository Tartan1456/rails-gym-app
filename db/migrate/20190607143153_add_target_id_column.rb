class AddTargetIdColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :results, :target_id, :int, default: nil
  end
end
