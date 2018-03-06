# def get_account_name(account)
#   return account[:holder_name]
# end

class BankAccount
# Must be defined before initiatize, and :<name> must match each @<name>
  # attr_reader :type, :amount, :holder_name
  # attr_writer :type, :amount, :holder_name

# this does both attr_reader & attr_writer:
attr_accessor :type, :amount, :holder_name

# this initalizes the class when we do BankAccount.new(name, amount, type)
# Class Properties are: input_holder_name, input_amount, input_type
  def initialize(input_holder_name, input_amount, input_type)
    @holder_name = input_holder_name      # these @ vars are available throughout our Class
    @amount = input_amount                # they can be the same names if we want
    @type = input_type                    # and can be used throughout our Class
  end

# Class methods:
# BUT... we can replace these repetitive get/set methods with attr_reader & attr_writer:

  # def get_holder_name
  #   return @holder_name
  # end
  #
  # def get_amount
  #   return @amount
  # end
  #
  # def get_type
  #   return @type
  # end

  # def set_holder_name(name)
  #   @holder_name = name
  # end
  #
  # def set_type(type)
  #   @type = type
  # end

  def direct_debit()
    @amount -= 50 if @type == "personal"
    @amount -= 100 if @type == "business"
  end

  def deposit(amount)
    self.amount += amount     # self refers to that instance of the Class
  end


end
