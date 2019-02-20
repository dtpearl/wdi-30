# Takes a string and returns the reversed content of that string.
def reverse(str)
  output = ''

  str.chars.each do |character|
    output = character + output
  end

  output
end

# def reverse(str)
#   # str.chars.inject { |memo, char| char + memo }
#
#   str.chars.inject do |memo, char|
      # puts "memo: #{ memo }, char: #{ char }"
#     char + memo # Reassemble these backwards.
#   end
# end


# Examples:
puts reverse('hotdogs') # => 'sgodtoh'
puts reverse(reverse('hotdogs')) # => 'hotdogs'
