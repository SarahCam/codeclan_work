require('minitest/autorun')
require('minitest/rg')
require_relative('../bank_account')

class TestBankAccount < MiniTest::Test

  def test_get_account_name
    bank_account = BankAccount.new('John', 500, 'business')
    assert_equal("John", bank_account.holder_name())
    # account = {
    #   holder_name: "John",
    #   amount: 500,
    #   type: "business"
    # }
    # assert_equal("John", get_account_name(account))
  end

  def test_get_amount
    bank_account = BankAccount.new('John', 500, 'business')
    assert_equal(500, bank_account.amount())
  end

  def test_get_type
    bank_account = BankAccount.new('John', 500, 'business')
    assert_equal("business", bank_account.type())
  end

  def test_set_account_name
    bank_account = BankAccount.new('John', 500, 'business')
    bank_account.holder_name = ("Steve")
    assert_equal("Steve", bank_account.holder_name())
  end

  def test_set_type
    bank_account = BankAccount.new('John', 500, 'business')
    bank_account.type = ("Personal")
    assert_equal("Personal", bank_account.type())
  end

  def test_direct_debit_business
    bank_account = BankAccount.new('John', 500, 'business')
    bank_account.direct_debit()
    assert_equal(400, bank_account.amount())
  end

  def test_direct_debit_personal
    bank_account = BankAccount.new('John', 500, 'personal')
    bank_account.direct_debit()
    assert_equal(450, bank_account.amount())
  end


end
