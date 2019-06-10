class AddPassedColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :results, :passed, :boolean, default: nil
  end
end
