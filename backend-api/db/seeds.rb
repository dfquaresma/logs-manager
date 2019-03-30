# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

7.times do |num|
    num += 1
    Log.create!(
        dia:"2017-09-2#{num}",
        hora:"2000-01-01T0#{num}:2#{num}:00.000Z",
        contexto:"lee#{num}",
        tipo:999 + num,
        mensagem:"sótuspêzuh!!!#{num}")
end
