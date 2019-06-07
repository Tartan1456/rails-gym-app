class AddResultColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :results, :complete, :boolean, default: nil
    add_column :results, :date, :datetime, default: nil
  end
end
