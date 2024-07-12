# Author: Justin Bento
# Project: Stock Picker - Ruby Course
# Start Date: 2024-04-05
# End Date:
# Assignment Breakdown:
# ------------------------------------------------------------------------------
# [] Implement a method called "stock_picker."
# [] Create a variable that stores an array of stock prices.
# [] The method should return two values:
#     - The first pair for the best day to buy.
#     - The second pair for the best day to sell.
#     Keep in mind that the day starts with zero.
# [] Quick Tip:
#     You need to buy before you can sell.
#     Pay attention to edge cases like:
#     - The lowest day being the last day.
#     - The highest day being the first day.
#
# Pseudo Code:
# [] Make a variable that holds an array of stock price values.
# [] The stock-price variable will only contain an array of numerical values.
# [] Our method #stock_picker takes in an array of stock prices.
# [] It should return a pair of days representing the best day to buy.
# [] It should return a second pair of days representing the best day to sell.
# [] Ensure the user buys before selling.
# [] Pay attention to edge cases such as when the lowest day is the last day or the highest day is the first day.
# ------------------------------------------------------------------------------

def stock_picker(prices)
  max_profit = 0
  best_days = []

  prices.each_with_index do |buy_price, buy_day|
    prices[buy_day+1..].each_with_index do |sell_price, sell_day|
      profit = sell_price - buy_price
      if profit > max_profit
        max_profit = profit
        best_days = [buy_day, sell_day + buy_day + 1]
      end
    end
  end

  best_days
end

stock_prices = [17, 3, 6, 9, 15, 8, 6, 1, 10]
best_days = stock_picker(stock_prices)
puts "Best days to buy and sell: #{best_days} for a profit of #{stock_prices[best_days[1]] - stock_prices[best_days[0]]}"
