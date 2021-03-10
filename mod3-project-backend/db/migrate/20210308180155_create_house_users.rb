class CreateHouseUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :house_users do |t|
      t.references :house, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
