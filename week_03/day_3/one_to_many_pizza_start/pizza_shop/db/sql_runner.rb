require('pg')

class SqlRunner

  def self.run(sql, values = [])         # defaults to [] if no values passed in
    begin
      db = PG.connect({dbname: 'pizza_shop', host: 'localhost'})
      db.prepare("query", sql)
      result = db.exec_prepared("query", values)
    ensure
      db.close() if db!= nil
    end
    return result
  end


end
