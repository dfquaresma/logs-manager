class CreateMetrics < ActiveRecord::Migration[5.1]
  def change
    create_table :metrics do |t|
      t.float :media_msg
      t.integer :maior_numb
      t.integer :menor_numb

      t.timestamps
    end
  end
end
